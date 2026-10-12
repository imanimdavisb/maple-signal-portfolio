/** Fields and validation rules for the Professional Portfolios inquiry form. */
import { careerStages, launchTimeframes, packages } from "./packages";

export const portfolioTypeOptions = [
  ...packages.map((p) => ({ value: p.id, label: `${p.name} — $${p.price}` })),
  { value: "student", label: "Student pricing (high school or college)" },
  { value: "not-sure", label: "Not sure yet — help me choose" },
] as const;

export type PortfolioInquiryInput = {
  fullName: string;
  email: string;
  portfolioType: string;
  careerStage: string;
  timeframe: string;
  profileUrl: string;
  requirements: string;
};

export type PortfolioInquiryErrors = Partial<Record<keyof PortfolioInquiryInput, string>>;

export const MAX_REQUIREMENTS = 2000;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function readPortfolioInquiry(data: FormData): PortfolioInquiryInput {
  const get = (key: keyof PortfolioInquiryInput) => {
    const value = data.get(key);
    return typeof value === "string" ? value.trim() : "";
  };
  return {
    fullName: get("fullName"),
    email: get("email"),
    portfolioType: get("portfolioType"),
    careerStage: get("careerStage"),
    timeframe: get("timeframe"),
    profileUrl: get("profileUrl"),
    requirements: get("requirements"),
  };
}

export function validatePortfolioInquiry(input: PortfolioInquiryInput): PortfolioInquiryErrors {
  const errors: PortfolioInquiryErrors = {};

  if (!input.fullName) errors.fullName = "Please enter your full name.";
  else if (input.fullName.length > 120) errors.fullName = "Please keep your name under 120 characters.";

  if (!input.email) errors.email = "Please enter your email address.";
  else if (!EMAIL.test(input.email))
    errors.email = "That email doesn't look quite right. Check for a missing @ or domain.";

  if (!portfolioTypeOptions.some((o) => o.value === input.portfolioType))
    errors.portfolioType = "Please choose a package, or “Not sure yet”.";

  if (!(careerStages as readonly string[]).includes(input.careerStage))
    errors.careerStage = "Please choose the stage that fits you best.";

  if (!(launchTimeframes as readonly string[]).includes(input.timeframe))
    errors.timeframe = "Please choose a launch timeframe.";

  if (input.profileUrl) {
    try {
      const url = new URL(
        /^https?:\/\//i.test(input.profileUrl) ? input.profileUrl : `https://${input.profileUrl}`
      );
      if (!url.hostname.includes(".")) throw new Error("no domain");
    } catch {
      errors.profileUrl = "Please enter a full link, like linkedin.com/in/your-name.";
    }
  }

  if (input.requirements.length > MAX_REQUIREMENTS)
    errors.requirements = `Please keep this under ${MAX_REQUIREMENTS} characters.`;

  return errors;
}
