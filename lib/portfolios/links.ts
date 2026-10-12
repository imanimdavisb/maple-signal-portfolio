import type { PackageId } from "./packages";

/** Link to the portfolio inquiry form with a package preselected. */
export function inquiryHref(packageId: PackageId) {
  return `/professional-portfolios?package=${packageId}#inquiry`;
}
