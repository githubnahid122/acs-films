import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { MOCK_GALLERY } from "@/constants/mockData";
import { STAGGER_CONTAINER, TRANSITION_VARIANTS } from "@/constants";
import SectionHeader from "@/components/common/SectionHeader";

export default function GallerySection() {
  const items = MOCK_GALLERY.slice(0, 8);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Behind the Scenes"
          title="A Glimpse of Acs Films"
          subtitle="From casting sessions to workshops and international festivals — life at Acs."
          className="mb-12"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={STAGGER_CONTAINER}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[160px]"
        >
          {items.map((img, i) => {
            // Create a varied layout
            const isWide = i === 0 || i === 5;
            const isTall = i === 2 || i === 7;

            return (
              <motion.div
                key={img.id}
                variants={TRANSITION_VARIANTS.scaleIn}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                  isWide ? "md:col-span-2" : ""
                } ${isTall ? "row-span-2" : ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs font-medium text-violet-300 uppercase tracking-wide">
                    {img.category}
                  </span>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
