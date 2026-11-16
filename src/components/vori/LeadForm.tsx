import React, { useState } from "react";
import { CheckCircle2, PhoneCall } from "lucide-react";

interface LeadFormProps {
  context?: string;
  onDone?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ context, onDone }) => {
  const [name, setName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lanes, setLanes] = useState("1 to 2 Registers");
  const [address, setAddress] = useState("");
  const [addHandheld, setAddHandheld] = useState(false);
  const [addEsl, setAddEsl] = useState(false);
  const [addDualDisplay, setAddDualDisplay] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
          <div className="py-6 text-center">
        <div className="w-14 h-14 rounded-full bg-[#ecfdf5] text-[#14a50f] flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-sans font-extrabold text-[25px] text-[#0f0f0f]">
          Request sent
        </h3>
        <p className="mt-2.5 text-[14.5px] text-[#555555] leading-relaxed">
          Thanks, <strong className="text-[#0f0f0f]">{name}</strong>. A technician will contact you about <strong className="text-[#0f0f0f]">{storeName}</strong>.
        </p>
        <button
          type="button"
          onClick={onDone}
          className="mt-6 px-7 py-3 rounded-full bg-[#0f0f0f] text-white text-[14px] font-bold"
        >
          Done
        </button>
      </div>
    );
  }

  return (
    <>
            <h3 className="font-sans font-extrabold text-[28px] sm:text-[32px] leading-[1.1] tracking-[-0.025em] text-[#0f0f0f]">
        Request free hardware
      </h3>
      <p className="mt-3 text-[15.5px] leading-[1.55] text-[#555555]">
        Scale, printer and cash drawer. Installed free.
        {context ? (
          <span className="hidden">
            {context}
          </span>
        ) : null}
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[13.5px] font-medium text-[#07080a]/70 mb-1.5">
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#07080a]/20 focus:border-[#07080a] focus:outline-none text-[15px]"
            />
          </div>
          <div>
            <label className="block text-[13.5px] font-medium text-[#07080a]/70 mb-1.5">
              Store
            </label>
            <input
              type="text"
              required
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              autoComplete="organization"
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#07080a]/20 focus:border-[#07080a] focus:outline-none text-[15px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[13.5px] font-medium text-[#07080a]/70 mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#07080a]/20 focus:border-[#07080a] focus:outline-none text-[15px]"
            />
          </div>
          <div>
            <label className="block text-[13.5px] font-medium text-[#07080a]/70 mb-1.5">
              Phone
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#07080a]/20 focus:border-[#07080a] focus:outline-none text-[15px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[13.5px] font-medium text-[#07080a]/70 mb-1.5">
              Registers
            </label>
            <select
              value={lanes}
              onChange={(e) => setLanes(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#07080a]/20 focus:border-[#07080a] focus:outline-none text-[15px]"
            >
              <option value="1 to 2 Registers">1 to 2 Registers</option>
              <option value="3 to 5 Registers">3 to 5 Registers</option>
              <option value="6+ Registers">6+ Registers</option>
            </select>
          </div>
          <div>
            <label className="block text-[13.5px] font-medium text-[#07080a]/70 mb-1.5">
              City and zip
            </label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              autoComplete="postal-code"
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#07080a]/20 focus:border-[#07080a] focus:outline-none text-[15px]"
            />
          </div>
        </div>

        {/* Optional Hardware Available to Purchase */}
        <div className="pt-1 flex flex-col gap-3">
          <span className="text-[14px] font-medium text-[#404040]">
            Add later (sold separately)
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[#262626] text-[15px]">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={addHandheld}
                onChange={(e) => setAddHandheld(e.target.checked)}
                className="rounded accent-[#14a50f] w-4 h-4"
              />
              <span>Handheld scanner</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={addEsl}
                onChange={(e) => setAddEsl(e.target.checked)}
                className="rounded accent-[#14a50f] w-4 h-4"
              />
              <span>Electronic shelf tags</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer sm:col-span-2">
              <input
                type="checkbox"
                checked={addDualDisplay}
                onChange={(e) => setAddDualDisplay(e.target.checked)}
                className="rounded accent-[#14a50f] w-4 h-4"
              />
              <span>Customer display and PIN pad</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-full bg-[#31e327] hover:bg-[#25c91d] active:scale-[0.99] text-[#07080a] text-[16px] font-semibold transition-all mt-2"
        >
          Send request
        </button>

        <div className="pt-1 flex items-center justify-center gap-2 text-[14px] text-[#666666]">
          <PhoneCall className="w-3.5 h-3.5 text-[#14a50f]" />
          <span>
            Prefer to talk? Call{" "}
            <a
              href="tel:3472130687"
              className="font-medium text-[#0f0f0f] underline underline-offset-4"
            >
              (347) 213-0687
            </a>
          </span>
        </div>
      </form>
    </>
  );
};
