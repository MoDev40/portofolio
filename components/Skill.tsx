import { AnimatePresence, motion, useInView } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Skill } from "@/lib/constants";
import { useRef, useState } from "react";

const SkillCard = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Card className="relative group overflow-hidden h-full">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              className="text-4xl relative"
              animate={isHovered ? { scale: 1.2, y: -10 } : { scale: 1, y: 0 }}
              style={{ color: skill.color }}
            >
              {skill.icon}
            </motion.div>

            <div className="text-center">
              <h3 className="font-medium text-sm mb-1 text-foreground">
                {skill.name}
              </h3>
              <div className="w-full bg-muted rounded-full h-1.5 mb-2">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={
                    isInView ? { width: `${skill.level}%` } : { width: 0 }
                  }
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>

            <AnimatePresence>
              {isHovered && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs text-muted-foreground text-center"
                >
                  {skill.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCard;
