import { useEffect, useRef } from 'react'

const Blob = ({
        top = '0px',
        left = '0px',
        color,
        radius = 300,
        image,
        outsideImage,
        imageScale = 1,
        imageOffset = { x: 0, y: 0 },
        outsideImageOffset = { x: 0, y: 0 },
    }) => {
        const canvasRef = useRef(null)

    useEffect(() => {
        class BlobEffect {
            constructor(options) {
                this._canvas = options.canvas
                this._ctx = this._canvas.getContext('2d')
                this._points = []
                this._numPoints = options.numPoints || 10
                this._speed = options.speed || 0.01
                this._radius = options.radius || 0
                this._color = options.color || 'rgba(97, 97, 97, 0.7)'
                this._imageSrc = options.image || null
                this._outsideImageSrc = options.outsideImage || null
                this._imageScale = options.imageScale || 1
                this._imageOffset = options.imageOffset || { x: 0, y: 0 }
                this._outsideImageOffset = options.outsideImageOffset || { x: 0, y: 0 }
                this._image = null
                this._outsideImage = null
                this._isPlaying = false
                this._frame = 0

                if (this._imageSrc) {
                    this._loadImage('_image', this._imageSrc)
                }

                if (this._outsideImageSrc) {
                    this._loadImage('_outsideImage', this._outsideImageSrc)
                }

                this._createPoints()
            }

            _loadImage(target, src) {
                const img = new Image()
                img.src = src
                img.onload = () => {
                    this[target] = img
                    this._draw()
                }
            }

            _createPoints() {
                const angleStep = (Math.PI * 2) / this._numPoints
                this._points = []

                for (let i = 0; i < this._numPoints; i++) {
                    const angle = angleStep * i
                    const x = this._canvas.width / 2 + Math.cos(angle) * this._radius
                    const y = this._canvas.height / 2 + Math.sin(angle) * this._radius

                    this._points.push({
                        x,
                        y,
                        baseX: x,
                        baseY: y,
                        angle,
                        speed: this._speed,
                        offset: Math.random() * Math.PI * 2,
                    })
                }
            }

            _updatePositions(point) {
                point.x = point.baseX + Math.cos(this._frame * point.speed + point.offset) * 15
                point.y = point.baseY + Math.sin(this._frame * point.speed + point.offset) * 15
            }

            _draw() {
                const { _ctx, _points, _canvas, _image, _outsideImage, _imageScale, _imageOffset, _outsideImageOffset } = this

                _ctx.clearRect(0, 0, _canvas.width, _canvas.height)
                _ctx.beginPath()

                if (_points.length > 2) {
                    this._frame += 1

                    _points.forEach((point) => this._updatePositions(point))

                    const firstPoint = _points[0]
                    const lastPoint = _points[_points.length - 1]

                    _ctx.moveTo(
                        (firstPoint.x + lastPoint.x) / 2,
                        (firstPoint.y + lastPoint.y) / 2
                    )

                    for (let i = 0; i < _points.length; i++) {
                        const current = _points[i]
                        const next = _points[(i + 1) % _points.length]

                        _ctx.quadraticCurveTo(
                            current.x,
                            current.y,
                            (current.x + next.x) / 2,
                            (current.y + next.y) / 2
                        )
                    }
                    _ctx.closePath()

                    _ctx.fillStyle = this._color
                    _ctx.fill()

                    if (_image) {
                        const imgWidth = _image.width * _imageScale
                        const imgHeight = _image.height * _imageScale

                        const imgX = (_canvas.width - imgWidth) / 2 + _imageOffset.x
                        const imgY = (_canvas.height - imgHeight) / 2 + _imageOffset.y

                        _ctx.globalCompositeOperation = 'source-atop'
                        _ctx.drawImage(_image, imgX, imgY, imgWidth, imgHeight)
                        _ctx.globalCompositeOperation = 'source-over'
                    }

                    if (_outsideImage) {
                        const imgWidth = _outsideImage.width * _imageScale
                        const imgHeight = _outsideImage.height * _imageScale

                        const imgX = (_canvas.width - imgWidth) / 2 + _outsideImageOffset.x
                        const imgY = (_canvas.height - imgHeight) / 2 + _outsideImageOffset.y

                        _ctx.drawImage(_outsideImage, imgX, imgY, imgWidth, imgHeight)
                    }
                }

                if (this._isPlaying) {
                    window.requestAnimationFrame(() => this._draw())
                }
            }

            start() {
                this._isPlaying = true
                this._draw()
            }

            stop() {
                this._isPlaying = false
            }
        }

        const canvas = canvasRef.current

        const resizeCanvas = () => {
            let adjustedRadius

            if (window.innerWidth <= 768) {
                adjustedRadius = radius * 0.5
            } else if (window.innerWidth <= 1140) {
                adjustedRadius = radius * 0.75
            } else if (window.innerWidth <= 1367) {
                adjustedRadius = radius * 0.9
            } else {
                adjustedRadius = radius
            }

            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

            const blob = new BlobEffect({
                canvas,
                radius: adjustedRadius,
                numPoints: 18,
                speed: 0.01,
                color,
                image,
                outsideImage,
                imageScale,
                imageOffset,
                outsideImageOffset,
            })

            blob.start()
            return blob
        }

        let blobInstance = resizeCanvas()

        window.addEventListener('resize', () => {
            blobInstance.stop()
            blobInstance = resizeCanvas()
        })

        return () => {
            blobInstance.stop()
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [top, left, color, radius, image, outsideImage, imageScale, imageOffset, outsideImageOffset])

    return (
        <canvas ref={canvasRef} style={{ position: 'absolute', top: top, left: left }} />
    )
}

export default Blob