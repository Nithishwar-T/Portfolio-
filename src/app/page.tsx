'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Sparkles, User, Briefcase, Award, Calendar, FolderOpen, Search, Filter, Eye, Star, BarChart3, PieChart, TrendingUp, Code, Database, Palette, Smartphone, Globe, Zap, MessageSquare, MapPin, Phone, Send, Clock, CheckCircle } from 'lucide-react'
import { useTheme } from 'next-themes'
import Navigation from '@/components/Navigation'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }))

  const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB']

  if (!isMounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Mouse-following light effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}, transparent 80%)`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <Badge variant="secondary" className="mb-4 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Available for Work
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
              Hi, I'm{' '}
              <span className="relative">
                Your Name
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
            >
              Full Stack Developer & UI/UX Designer
              <br />
              <span className="text-lg">Creating digital experiences that matter</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {skills.map((skill, index) => (
                <Badge key={skill} variant="outline" className="hover:bg-primary/10 transition-colors">
                  {skill}
                </Badge>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="group">
                View My Work
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                Contact Me
                <Mail className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex gap-4 justify-center lg:justify-start mt-8"
            >
              <motion.a
                href="#"
                className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <Card className="relative overflow-hidden border-2 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <motion.div
                  className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">YN</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Your Name</h3>
                    <p className="text-muted-foreground">Full Stack Developer</p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            {/* Floating Stats */}
            <motion.div
              className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg"
              animate={{ y: [-10, 0, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-sm font-semibold">5+ Years Experience</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-lg"
              animate={{ y: [10, 0, 10] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <div className="text-sm font-semibold">50+ Projects</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ChevronDown className="w-6 h-6 mx-auto" />
            <span className="text-sm mt-2 block">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const AboutSection = () => {
  const timeline = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      description: "Leading development of scalable web applications using modern technologies"
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      company: "Digital Agency",
      description: "Developed and maintained multiple client projects with focus on performance and UX"
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "Startup Inc",
      description: "Built responsive web applications and collaborated with design teams"
    },
    {
      year: "2019",
      title: "Junior Developer",
      company: "Web Studio",
      description: "Started professional journey in web development"
    }
  ]

  const skills = [
    { name: "Frontend Development", level: 95, icon: "🎨" },
    { name: "Backend Development", level: 85, icon: "⚡" },
    { name: "UI/UX Design", level: 80, icon: "🎯" },
    { name: "Database Management", level: 75, icon: "🗄️" },
    { name: "Cloud Services", level: 70, icon: "☁️" },
    { name: "DevOps", level: 65, icon: "🔧" }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <User className="w-4 h-4 mr-2" />
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Passionate About Creating
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}Digital Excellence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a full-stack developer with a passion for creating innovative digital solutions. 
            With expertise in modern web technologies, I transform ideas into reality through clean code and intuitive design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mr-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Your Name</h3>
                    <p className="text-muted-foreground">Full Stack Developer</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate developer with over 5 years of experience in creating web applications. 
                  I love working with modern technologies and am always eager to learn new things. 
                  My goal is to create digital experiences that are not only functional but also beautiful and user-friendly.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 text-primary mr-3" />
                    <span className="font-medium">Experience:</span>
                    <span className="ml-auto text-muted-foreground">5+ Years</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-primary mr-3" />
                    <span className="font-medium">Projects:</span>
                    <span className="ml-auto text-muted-foreground">50+ Completed</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary mr-3" />
                    <span className="font-medium">Location:</span>
                    <span className="ml-auto text-muted-foreground">Your City</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="text-xl mr-3">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary to-primary/60 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 * index }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Career Journey</h3>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                          <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold">{item.title}</h4>
                            <Badge variant="outline">{item.year}</Badge>
                          </div>
                          <p className="text-sm text-primary mb-2">{item.company}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-6 bg-border" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ProjectsSection = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/400/300",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      views: 1250,
      likes: 89,
      detailedDescription: "This comprehensive e-commerce platform features user authentication, product catalog, shopping cart, order management, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
      challenges: "Implementing real-time inventory updates and integrating multiple payment gateways while maintaining security and performance.",
      solution: "Used WebSocket for real-time updates, implemented proper security measures, and optimized database queries for better performance."
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "/api/placeholder/400/300",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      views: 980,
      likes: 67,
      detailedDescription: "A mobile-first task management app that enables teams to collaborate effectively with features like real-time updates, file sharing, comments, and progress tracking.",
      challenges: "Ensuring smooth real-time synchronization across multiple devices and maintaining offline functionality.",
      solution: "Implemented Firebase real-time database with offline support and optimized data synchronization algorithms."
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      description: "An intelligent chat assistant powered by machine learning for customer support automation.",
      category: "ai",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      image: "/api/placeholder/400/300",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      views: 1560,
      likes: 120,
      detailedDescription: "An AI-powered chat assistant that uses natural language processing to understand and respond to customer queries, reducing response time and improving customer satisfaction.",
      challenges: "Training accurate NLP models and integrating them seamlessly into a user-friendly interface.",
      solution: "Used advanced NLP techniques and created a robust API architecture for smooth integration."
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations and interactive elements.",
      category: "web",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/api/placeholder/400/300",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      views: 2100,
      likes: 156,
      detailedDescription: "A stunning portfolio website showcasing modern web development capabilities with smooth animations, responsive design, and optimal performance.",
      challenges: "Creating smooth animations while maintaining performance and ensuring cross-browser compatibility.",
      solution: "Used Framer Motion for animations and implemented performance optimization techniques."
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for data visualization and business analytics.",
      category: "data",
      technologies: ["D3.js", "React", "Express", "PostgreSQL"],
      image: "/api/placeholder/400/300",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      views: 890,
      likes: 78,
      detailedDescription: "A comprehensive data visualization dashboard that transforms complex data into intuitive visual representations for better business insights.",
      challenges: "Handling large datasets and creating responsive visualizations that work across different devices.",
      solution: "Implemented data aggregation strategies and used responsive design principles for the visualizations."
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "A comprehensive analytics platform for social media performance tracking.",
      category: "data",
      technologies: ["Vue.js", "Python", "Redis", "Chart.js"],
      image: "/api/placeholder/400/300",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      views: 1340,
      likes: 95,
      detailedDescription: "An advanced analytics platform that tracks social media performance across multiple platforms and provides actionable insights.",
      challenges: "Integrating with multiple social media APIs and processing large amounts of data efficiently.",
      solution: "Created a robust data pipeline and implemented caching strategies for better performance."
    }
  ]

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'ai', label: 'AI & ML' },
    { value: 'data', label: 'Data Science' }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <FolderOpen className="w-4 h-4 mr-2" />
            My Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest projects showcasing expertise in modern web development, 
            mobile applications, and cutting-edge technologies.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                        <FolderOpen className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-primary/90">
                      Featured
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Eye className="w-4 h-4" />
                        {project.views}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {project.likes}
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedProject(project)}>
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{project.title}</DialogTitle>
                            <DialogDescription>
                              {project.detailedDescription}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <Badge key={tech} variant="secondary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Challenges</h4>
                              <p className="text-sm text-muted-foreground">{project.challenges}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Solution</h4>
                              <p className="text-sm text-muted-foreground">{project.solution}</p>
                            </div>
                            <div className="flex gap-4 pt-4">
                              <Button asChild>
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </a>
                              </Button>
                              <Button variant="outline" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4 mr-2" />
                                  Source Code
                                </a>
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">All Projects ({filteredProjects.length})</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                        <FolderOpen className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Eye className="w-4 h-4" />
                        {project.views}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 2}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {project.likes}
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedProject(project)}>
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{project.title}</DialogTitle>
                            <DialogDescription>
                              {project.detailedDescription}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <Badge key={tech} variant="secondary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Challenges</h4>
                              <p className="text-sm text-muted-foreground">{project.challenges}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Solution</h4>
                              <p className="text-sm text-muted-foreground">{project.solution}</p>
                            </div>
                            <div className="flex gap-4 pt-4">
                              <Button asChild>
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </a>
                              </Button>
                              <Button variant="outline" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4 mr-2" />
                                  Source Code
                                </a>
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('technical')

  const technicalSkills = [
    { name: 'JavaScript/TypeScript', level: 95, icon: Code, category: 'frontend' },
    { name: 'React/Next.js', level: 90, icon: Code, category: 'frontend' },
    { name: 'Node.js/Express', level: 85, icon: Database, category: 'backend' },
    { name: 'Python/Django', level: 80, icon: Database, category: 'backend' },
    { name: 'HTML/CSS/Tailwind', level: 92, icon: Palette, category: 'frontend' },
    { name: 'MongoDB/PostgreSQL', level: 78, icon: Database, category: 'backend' },
    { name: 'React Native', level: 75, icon: Smartphone, category: 'mobile' },
    { name: 'AWS/Cloud Services', level: 70, icon: Globe, category: 'devops' }
  ]

  const softSkills = [
    { name: 'Problem Solving', level: 95, icon: Zap },
    { name: 'Team Leadership', level: 88, icon: Zap },
    { name: 'Communication', level: 90, icon: Zap },
    { name: 'Project Management', level: 82, icon: Zap },
    { name: 'Creative Thinking', level: 87, icon: Zap },
    { name: 'Adaptability', level: 93, icon: Zap }
  ]

  const skillCategories = [
    { id: 'technical', label: 'Technical Skills', icon: BarChart3 },
    { id: 'soft', label: 'Soft Skills', icon: PieChart }
  ]

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <skill.icon className="w-4 h-4 text-primary" />
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary to-primary/60 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 * index }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}Proficiency
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains 
            of modern web development and software engineering.
          </p>
        </motion.div>

        {/* Skills Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-background rounded-lg p-1 border">
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-md transition-colors ${
                  activeTab === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  {activeTab === 'technical' ? 'Technical Skills' : 'Soft Skills'}
                </h3>
                <div className="space-y-6">
                  {(activeTab === 'technical' ? technicalSkills : softSkills).map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Skills Overview</h3>
                <div className="space-y-6">
                  {/* Skills Radar Chart */}
                  <div className="aspect-square max-w-sm mx-auto">
                    <div className="relative w-full h-full">
                      {/* Radar Chart Background */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 border-2 border-primary/20 rounded-full" />
                        <div className="w-24 h-24 border-2 border-primary/30 rounded-full absolute" />
                        <div className="w-16 h-16 border-2 border-primary/40 rounded-full absolute" />
                        <div className="w-8 h-8 border-2 border-primary/60 rounded-full absolute" />
                      </div>
                      
                      {/* Skill Points */}
                      <div className="absolute inset-0">
                        {technicalSkills.slice(0, 6).map((skill, index) => {
                          const angle = (index * 60) * (Math.PI / 180)
                          const radius = (skill.level / 100) * 80
                          const x = 50 + radius * Math.cos(angle - Math.PI / 2)
                          const y = 50 + radius * Math.sin(angle - Math.PI / 2)
                          
                          return (
                            <motion.div
                              key={skill.name}
                              className="absolute w-3 h-3 bg-primary rounded-full"
                              style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                transform: 'translate(-50%, -50%)'
                              }}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 * index }}
                              viewport={{ once: true }}
                            />
                          )
                        })}
                      </div>
                      
                      {/* Skill Labels */}
                      <div className="absolute inset-0">
                        {technicalSkills.slice(0, 6).map((skill, index) => {
                          const angle = (index * 60) * (Math.PI / 180)
                          const x = 50 + 90 * Math.cos(angle - Math.PI / 2)
                          const y = 50 + 90 * Math.sin(angle - Math.PI / 2)
                          
                          return (
                            <div
                              key={skill.name}
                              className="absolute text-xs font-medium text-muted-foreground"
                              style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                transform: 'translate(-50%, -50%)'
                              }}
                            >
                              {skill.name.split(' ')[0]}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Skills Summary */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="text-center p-4 bg-primary/5 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-primary">8+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      viewport={{ once: true }}
                      className="text-center p-4 bg-primary/5 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Technologies</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      viewport={{ once: true }}
                      className="text-center p-4 bg-primary/5 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                      viewport={{ once: true }}
                      className="text-center p-4 bg-primary/5 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Your City, Country',
      href: '#'
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Mon-Fri, 9AM-6PM',
      href: '#'
    }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com', color: 'hover:bg-gray-800' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: MessageSquare, url: 'https://twitter.com', color: 'hover:bg-blue-400' },
    { name: 'Portfolio', icon: Globe, url: 'https://yourportfolio.com', color: 'hover:bg-green-600' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            I'd love to hear from you! Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        {info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? (
                          <a
                            href={info.href}
                            className="text-primary hover:underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-muted-foreground">{info.value}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-lg border bg-background hover:bg-primary/5 transition-colors ${social.color} hover:text-white`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3">
                        <social.icon className="w-5 h-5" />
                        <span className="font-medium">{social.name}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interactive Map */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Location</h3>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary/60 mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Your City, Country</p>
                  </div>
                  
                  {/* Animated location marker */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-1 h-12 bg-primary mx-auto mt-1 opacity-60" />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}