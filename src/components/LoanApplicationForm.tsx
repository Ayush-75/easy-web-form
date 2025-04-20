
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const LoanApplicationForm = () => {
  const [loanType, setLoanType] = useState("Gold Loan");

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Loan Type Select */}
        <select
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bank-gold text-black"
          value={loanType}
          onChange={(e) => setLoanType(e.target.value)}
        >
          <option value="Gold Loan">Gold Loan</option>
          <option value="Home Loan">Home Loan</option>
          <option value="Loan Against Property">Loan Against Property</option>
        </select>

        {/* Pincode Input */}
        <Input
          type="text"
          placeholder="Pincode"
          className="bg-white text-black"
        />

        {/* Mobile Number Input */}
        <Input
          type="tel"
          placeholder="Mobile Number"
          className="bg-white text-black"
        />
      </div>

      {/* Apply Button */}
      <div className="space-y-2">
        <Button className="bg-bank-gold hover:bg-amber-600 text-black font-semibold w-32">
          Apply
        </Button>
        <p className="text-sm text-black">
          By clicking the Apply button, you agree to the{" "}
          <a href="#" className="text-bank-gold underline">
            T&C
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoanApplicationForm;

