import Section from "../ui/Section";
import Field from "../cards/Field";

export default function AppointmentForm() {
  return (
    <Section>
      <div className="rounded-2xl h-60 bg-slate-900 p-6 pt-12">
        <p className="mb-4 text-center text-sm font-medium text-white">Make an appointment today for a free dental checkup.</p>
        <div className="flex flex-col gap-4 md:flex-row md:items-end">
          <Field label="Full Name" placeholder="Edward Mitchell" />
          <Field label="Phone" placeholder="+1 (555) 000-1234" />
          <Field label="Department" placeholder="Neurology" />
          <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white">Appointment Now</button>
        </div>
      </div>
    </Section>
  );
}
