'use client'

import { useState, useEffect } from 'react'
import { Rocket, Mail, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2025-01-15T00:00:00') // Set your launch date here
    
    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })

      if (difference < 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-100 font-sans">
      <header className="p-4 sm:p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <span className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">Easy Launch</span> */}
            <img width={150} src='https://www.dropbox.com/scl/fi/if1feskwnt27zqnln8uug/ASKPPL_Wordmark_Logo.png?rlkey=un3gj8k5h0x08ogw1dp1r2dds&st=0eqzubuy&dl=0&raw=1'/>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 pb-1">Coming Soon</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">We're crafting something extraordinary. Get ready for a revolutionary launch experience.</p>
          
          <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center bg-gray-800 bg-opacity-50 p-3 sm:p-4 rounded-lg backdrop-blur-sm border border-gray-700">
                <div className="text-2xl sm:text-4xl font-bold text-emerald-400 mb-1">{value}</div>
                <div className="text-xs sm:text-sm uppercase text-gray-400 tracking-wider">{unit}</div>
              </div>
            ))}
          </div>

          <form className="max-w-sm sm:max-w-md mx-auto mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-gray-800 bg-opacity-50 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-emerald-400 focus:ring-emerald-400 rounded-lg"
              />
              <Button type="submit" className="bg-emerald-500 text-gray-900 hover:bg-emerald-400 rounded-lg font-semibold px-6 py-2 transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
                Notify Me
              </Button>
            </div>
          </form>
        </div>
      </main>

      <footer className="p-4 sm:p-6">
        <div className="container mx-auto flex justify-center space-x-4 sm:space-x-6">
          <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
            <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
            <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
            <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </footer>
    </div>
  )
}