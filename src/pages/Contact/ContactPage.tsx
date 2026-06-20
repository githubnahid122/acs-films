import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import PageHeader from '@/components/common/PageHeader'
import { TRANSITION_VARIANTS, STAGGER_CONTAINER } from '@/constants'
import { SITE_EMAIL, SITE_PHONE, SITE_ADDRESS } from '@/constants'
import { cn } from '@/utils'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(10, 'Enter a valid phone number').optional().or(z.literal('')),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FormData = z.infer<typeof schema>

interface FieldProps {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}

function Field({ label, error, required, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#0F172A]">
        {label} {required && <span className="text-[#FF5C35]">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 flex items-center gap-1"><span>⚠</span> {error}</p>}
    </div>
  )
}

const inputClass = (error?: string) =>
  cn(
    'w-full px-4 py-3 border rounded-xl text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all',
    error
      ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
      : 'border-slate-200 focus:border-[#7C3AED] focus:ring-violet-100'
  )

const CONTACT_ITEMS = [
  { icon: Mail, label: 'Email', value: SITE_EMAIL, href: `mailto:${SITE_EMAIL}` },
  { icon: Phone, label: 'Phone', value: SITE_PHONE, href: `tel:${SITE_PHONE}` },
  { icon: MapPin, label: 'Address', value: SITE_ADDRESS, href: undefined },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitted(true)
    reset()
  }

  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Have a question, project, or just want to say hello? We'd love to hear from you."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-14 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER_CONTAINER}
              className="lg:col-span-2 space-y-5"
            >
              <motion.div variants={TRANSITION_VARIANTS.fadeUp}>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Let's Start a Conversation
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Whether you're an aspiring actor, a filmmaker looking to cast, or a journalist — reach out and our team will get back to you within 24 hours.
                </p>
              </motion.div>

              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  variants={TRANSITION_VARIANTS.fadeUp}
                  className="flex items-start gap-4 bg-white border border-slate-100 rounded-2xl p-5 hover:border-violet-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-semibold text-[#0F172A] hover:text-[#7C3AED] transition-colors">{value}</a>
                    ) : (
                      <p className="text-sm font-semibold text-[#0F172A]">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A]">Message Sent!</h3>
                    <p className="text-slate-500 text-sm max-w-xs">
                      Thanks for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm text-[#7C3AED] font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Full Name" required error={errors.name?.message}>
                        <input
                          {...register('name')}
                          placeholder="Aarav Mehta"
                          className={inputClass(errors.name?.message)}
                        />
                      </Field>
                      <Field label="Email Address" required error={errors.email?.message}>
                        <input
                          {...register('email')}
                          type="email"
                          placeholder="aarav@example.com"
                          className={inputClass(errors.email?.message)}
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Phone Number" error={errors.phone?.message}>
                        <input
                          {...register('phone')}
                          type="tel"
                          placeholder="+91 98765 43210"
                          className={inputClass(errors.phone?.message)}
                        />
                      </Field>
                      <Field label="Subject" required error={errors.subject?.message}>
                        <input
                          {...register('subject')}
                          placeholder="Workshop Enquiry"
                          className={inputClass(errors.subject?.message)}
                        />
                      </Field>
                    </div>

                    <Field label="Message" required error={errors.message?.message}>
                      <textarea
                        {...register('message')}
                        rows={5}
                        placeholder="Tell us about yourself and how we can help…"
                        className={cn(inputClass(errors.message?.message), 'resize-none')}
                      />
                    </Field>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 bg-[#7C3AED] hover:bg-[#6d28d9] text-white font-semibold py-4 rounded-xl transition-all disabled:opacity-60 text-sm shadow-lg shadow-violet-200"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
