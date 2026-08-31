import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function CaseStudyNotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="We couldn't find that project"
        description="The case study you're looking for may have moved or doesn't exist yet."
      />
      <Section>
        <Button href="/work">Back to Our Work</Button>
      </Section>
    </>
  );
}
