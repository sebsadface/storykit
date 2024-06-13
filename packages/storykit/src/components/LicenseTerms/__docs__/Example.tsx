import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React, { FC } from "react"

import LicenseTerms, { LicenseTermsProps } from "../LicenseTerms"

const Example: FC<LicenseTermsProps> = ({
  size = "medium",
  direction = "column",
  selectedLicenseTerms,
  selectedLicenseTermsId,
}) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-full w-full items-center justify-center">
        <LicenseTerms
          size={size}
          direction={direction}
          selectedLicenseTerms={selectedLicenseTerms}
          selectedLicenseTermsId={selectedLicenseTermsId}
        />
      </div>
    </QueryClientProvider>
  )
}

export default Example
