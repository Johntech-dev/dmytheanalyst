'use client'
import Link from "next/link"
import { ArrowRight, BarChart2, Database, LineChart, Mail, Phone, Share2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import TrustedOrganization from "@/components/trusted-organization"
import SocialLinks from "@/components/social-links"
import { DataDashboard } from "@/components/dashboard/data-dashboard"
import { useState } from "react"

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-purple-50 z-0"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-purple-600 to-amber-500 text-transparent bg-clip-text">
              OLATUNJI ADEMOLA
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Passionate Data & BI Analyst dedicated to transforming data into business insights that drive growth and
              beat competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white" size="lg" asChild>
                <Link href="#projects">
                  View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
                asChild
              >
                <Link href="#about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-6 w-6 text-amber-600 rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-500 mx-auto">
                  <img src="/images/profile.jpeg" alt="Olatunji Ademola" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-4 bg-purple-600 text-white py-2 px-4 rounded-lg shadow-lg">
                  Data & BI Analyst
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
              <p className="text-gray-700 mb-4">
              I'm a Data & BI Analyst with a passion for transforming raw data into clear insights. My journey began in late 2022 through self-learning and YouTube tutorials, where I built my foundation in data analysis.
              </p>
              <p className="text-gray-700 mb-4">
              In 2023, I earned scholarships from DataCamp and the 3MTT Nigeria program, which sharpened my skills in Python, data wrangling, and visualization. I later trained at Zacrac Learning in Akure, where I worked on practical projects like inventory optimization, marketing performance analysis, customer churn prediction, and time series forecasting.
              </p>
              <p className="text-gray-700 mb-6">
              I've also contributed to research projects at institutions like FUTA and EKSU—leading data collection through Google Forms and analyzing responses using Power Query and Power BI.I'm committed to growth, storytelling through data, and solving real-world problems with clarity and purpose.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">My Skills</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <SkillBadge icon={<Database className="h-4 w-4" />} name="SQL" />
                <SkillBadge icon={<BarChart2 className="h-4 w-4" />} name="Power BI" />
                <SkillBadge icon={<LineChart className="h-4 w-4" />} name="Tableau" />
                <SkillBadge icon={<Database className="h-4 w-4" />} name="Excel" />
                <SkillBadge icon={<Share2 className="h-4 w-4" />} name="Python" />
                <SkillBadge icon={<BarChart2 className="h-4 w-4" />} name="Google Looker" />
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  <Link href="#projects">My Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Section */}
      <section id="dashboard" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Interactive Data Visualization</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore this interactive dashboard showcasing my data visualization skills and ability to transform raw data
            into actionable insights
          </p>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <DataDashboard />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">My Projects</h2>
          <p className="text-gray-600 text-center mb-4 max-w-2xl mx-auto">
            A showcase of my data analysis work across various industries and domains
          </p>

          <div className="text-center mb-8">
            <Link
              href="https://www.blogger.com/blog/posts/4084584427104345231"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
            >
              View more projects on my blog <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="University Research Analysis"
              description="Research conducted across multiple Nigerian universities to identify student challenges using Google Forms, Power Query, and Power BI."
              category="Education"
              tools={["Power BI", "Google Forms", "Power Query"]}
              imagePath="/images/projects/university-research.jpeg"
              link="https://www.blogger.com/blog/posts/4084584427104345231"
            />
            <ProjectCard
              title="Customer Churn Analysis"
              description="Predictive analysis to identify factors leading to customer churn and strategies for retention."
              category="Business Intelligence"
              tools={["Python", "SQL", "Tableau"]}
              imagePath="/images/projects/customer-churn.jpeg"
              link="https://www.blogger.com/blog/posts/4084584427104345231"
            />
            <ProjectCard
              title="Financial Data Analysis"
              description="Detailed financial analysis to identify trends and make data-driven investment recommendations."
              category="Finance"
              tools={["Excel", "Python", "Matplotlib"]}
              imagePath="/images/projects/financial-analysis.jpeg"
              link="https://medium.com/@olatunjiademola015/financial-data-analysis-uncovering-trends-strategic-investment-opportunities-by-demola-6be953fe2ee7"
            />
            <ProjectCard
              title="Retail Stock Inventory Analysis"
              description="Inventory optimization system to reduce stockouts and overstock situations."
              category="Retail"
              tools={["Excel", "Power BI", "SQL"]}
              imagePath="/retail.jpg"
              link="https://www.blogger.com/blog/posts/4084584427104345231"
            />
            <ProjectCard
              title="Marketing Campaign Analysis"
              description="ROI analysis of marketing campaigns across different channels to optimize ad spend."
              category="Marketing"
              tools={["Google Analytics", "Excel", "Tableau"]}
              imagePath="/marketing.jpg"
              link="https://medium.com/@olatunjiademola015/optimizing-digital-ad-spend-a-deep-dive-into-fresh-carts-marketing-campaign-roi-2212d5948481"
            />
            <ProjectCard
              title="Drug Abuse Trend Analysis"
              description="Statistical analysis of drug abuse patterns to support public health interventions."
              category="Healthcare"
              tools={["Python", "SPSS", "Power BI"]}
              imagePath="/drug.jpg"
              link="https://www.blogger.com/blog/posts/4084584427104345231"
            />
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-purple-600 hover:bg-purple-700">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* Trusted Organizations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center text-gray-800">Trusted By Data-Driven Organizations</h2>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            <TrustedOrganization name="Pro Attire" logoPath="/proattire.jpg" />
            <TrustedOrganization name="rPi Data" logoPath="/rpi.jpg" />
            <TrustedOrganization name="DataRepublic" logoPath="/data-republic.jpeg" />
            <TrustedOrganization name="Dexterhub" logoPath="/dexter.jpg" />
            <TrustedOrganization name="Fordest Technology" logoPath="/fordest.png" />
          </div>
        </div>
      </section>

      {/* Testimonials/Experience */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Experience & Impact</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            My professional journey and the difference I've made
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-amber-200 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-amber-700">Mentorship & Teaching</h3>
                <p className="text-gray-700 mb-4">
                  Successfully mentored over 40 aspiring data analysts, guiding them to develop confidence and
                  proficiency in analytical skills.
                </p>
                <div className="flex items-center justify-end">
                  <span className="text-purple-600 font-medium">40+ Students Mentored</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Professional Experience</h3>
                <p className="text-gray-700 mb-4">
                  Worked with Dexterhub and Fordest Technology, delivering data-driven insights that improved business
                  decision-making and operational efficiency.
                </p>
                <div className="flex items-center justify-end">
                  <span className="text-amber-600 font-medium">2+ Years Experience</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Get In Touch</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Let's discuss how data analysis can transform your business
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-amber-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-800">07044839286, 07010073061</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-amber-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-800">olatunjiademola015@gmail.com</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm text-gray-500 mb-3">Social Media</p>
                    <SocialLinks />
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Send Me a Message</h3>

                {submitStatus.type && (
                  <div className={`mb-4 p-4 rounded-md ${
                    submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="How can I help with your data needs?"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-600 to-purple-600 hover:from-amber-700 hover:to-purple-700 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 text-transparent bg-clip-text">
                OLATUNJI ADEMOLA
              </h2>
              <p className="text-gray-400">Data & BI Analyst</p>
            </div>

            <div className="flex space-x-4">
              <SocialLinks light />
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Olatunji Ademola. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
