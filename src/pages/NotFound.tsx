import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Ghost } from 'lucide-react';
import { FlowButton } from '../components/ui/flow-button';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96] as const
    }
  }
};

const numberVariants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction * 40,
    y: 15,
    rotate: direction * 5
  }),
  visible: {
    opacity: 0.7,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96] as const
    }
  }
};

const ghostVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    y: 15,
    rotate: -5
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96] as const
    }
  },
  floating: {
    y: [-5, 5],
    transition: {
      y: {
        duration: 2,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  }
};

export function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-surface-container-lowest px-4 pt-24 pb-16">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12">
          <motion.span
            className="text-[80px] md:text-[120px] font-black text-orange-600 dark:text-orange-500 opacity-70 select-none"
            variants={numberVariants}
            custom={-1}
          >
            4
          </motion.span>
          <motion.div
            variants={ghostVariants}
            animate={["visible", "floating"]}
          >
            <Ghost
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] text-orange-600 dark:text-orange-500 select-none"
              strokeWidth={1.5}
            />
          </motion.div>
          <motion.span
            className="text-[80px] md:text-[120px] font-black text-orange-600 dark:text-orange-500 opacity-70 select-none"
            variants={numberVariants}
            custom={1}
          >
            4
          </motion.span>
        </div>

        <motion.h1
          className="font-h1 text-h1 text-on-surface mb-4 md:mb-6 select-none"
          variants={itemVariants}
        >
          Boo! Page missing!
        </motion.h1>

        <motion.p
          className="font-body-lg text-body-lg text-on-surface-variant mb-8 md:mb-12 select-none"
          variants={itemVariants}
        >
          Whoops! This page must be a ghost - it's not here!
        </motion.p>

        <motion.div variants={itemVariants} className="flex justify-center">
          <Link to="/">
            <FlowButton text="Back to Home" />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
