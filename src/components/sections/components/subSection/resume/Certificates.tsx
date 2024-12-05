import { SubSection } from "@/components/sections/ui/sub-section";
import { Button } from "@/components/ui/button";
import { IResume } from "@/interfaces/IResume";
import { ExternalLink } from "lucide-react";
import React from "react";

function Certificates({ resumeMeData }: { resumeMeData: IResume }) {
  return (
    <SubSection title="Certificates">
      <div className="space-y-6">
        {resumeMeData.certificates.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-start gap-2"
          >
            <div className="flex flex-row justify-between w-full items-center gap-2">
              <h3 className="text-secondary w-1/3">{cert.name}</h3>

              <p className="text-primary text-sm w-1/3 text-right">
                {cert.issuer} ({cert.year})
              </p>
              <div className="w-1/3 flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2  w-[140px] border-primary"
                    asChild
                  >
                    <a
                      href={cert.certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
              </div>
            </div>
            <p className="text-fonts">{cert.certDescription}</p>
          </div>
        ))}
      </div>
    </SubSection>
  );
}

export default Certificates;
