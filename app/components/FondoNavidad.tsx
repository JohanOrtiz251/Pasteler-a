'use client'

import React, { useEffect, useRef } from 'react'

const FondoNavidad: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    setCanvasSize()

    const coposDeNieve: CopoDeNieve[] = []
    const numeroCopos = 100 // Aumentado para más copos visibles

    class CopoDeNieve {
      x: number
      y: number
      tamaño: number
      velocidadY: number
      velocidadX: number
      rotacion: number
      velocidadRotacion: number
      opacidad: number

      constructor() {
        this.reiniciar()
      }

      reiniciar() {
        this.x = Math.random() * canvas.width
        this.y = -10 - Math.random() * canvas.height // Distribuir verticalmente
        this.tamaño = Math.random() * 2 + 1 // Ligeramente más grandes
        this.velocidadY = Math.random() * 0.5 + 0.3
        this.velocidadX = Math.random() * 0.2 - 0.1
        this.rotacion = Math.random() * Math.PI * 2
        this.velocidadRotacion = (Math.random() * 0.02 - 0.01)
        this.opacidad = Math.random() * 0.5 + 0.5 // Mayor opacidad
      }

      dibujarCopo() {
        if (!ctx) return

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotacion)
        ctx.globalAlpha = this.opacidad

        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
          ctx.moveTo(0, 0)
          ctx.lineTo(0, this.tamaño * 3)
          
          ctx.moveTo(0, this.tamaño)
          ctx.lineTo(this.tamaño, this.tamaño * 1.5)
          ctx.moveTo(0, this.tamaño)
          ctx.lineTo(-this.tamaño, this.tamaño * 1.5)
          
          ctx.moveTo(0, this.tamaño * 2)
          ctx.lineTo(this.tamaño * 0.7, this.tamaño * 2.5)
          ctx.moveTo(0, this.tamaño * 2)
          ctx.lineTo(-this.tamaño * 0.7, this.tamaño * 2.5)
          
          ctx.rotate(Math.PI / 3)
        }
        
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = this.tamaño / 5
        ctx.stroke()
        
        ctx.beginPath()
        ctx.arc(0, 0, this.tamaño / 3, 0, Math.PI * 2)
        ctx.fillStyle = '#ffffff'
        ctx.fill()
        
        ctx.restore()
      }

      actualizar(deltaTime: number) {
        this.y += this.velocidadY * (deltaTime / 16)
        this.x += this.velocidadX * (deltaTime / 16)
        this.rotacion += this.velocidadRotacion * (deltaTime / 16)

        if (this.y > canvas.height + 10) {
          this.reiniciar()
        }

        if (this.x > canvas.width + 10) {
          this.x = -10
        } else if (this.x < -10) {
          this.x = canvas.width + 10
        }
      }
    }

    for (let i = 0; i < numeroCopos; i++) {
      coposDeNieve.push(new CopoDeNieve())
    }

    let lastTime = 0
    const fps = 60
    const frameInterval = 1000 / fps

    const animacion = (timestamp: number) => {
      if (!ctx || !canvas) return

      const deltaTime = timestamp - lastTime
      if (deltaTime < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(animacion)
        return
      }
      lastTime = timestamp - (deltaTime % frameInterval)

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      coposDeNieve.forEach(copo => {
        copo.actualizar(deltaTime)
        copo.dibujarCopo()
      })

      animationFrameRef.current = requestAnimationFrame(animacion)
    }

    animationFrameRef.current = requestAnimationFrame(animacion)

    const handleResize = () => {
      setCanvasSize()
      coposDeNieve.forEach(copo => copo.reiniciar())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
}

export default FondoNavidad

