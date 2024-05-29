import React from 'react';

interface ProviderViewProps {
  data: MiraData;
  collapsedSections: Set<string>;
  toggleCollapse: (sectionId: string) => void;
}

interface CollapsibleSection {
  id: string;
  title: string;
  color: string;
  content: JSX.Element;
}

const ProviderView: React.FC<ProviderViewProps> = ({ data, collapsedSections, toggleCollapse }) => {
 
const collapsibleSections: CollapsibleSection[] = [
  {
      id: 'intake-content',
      title: 'Intake',
      color: 'yellow',
      content: (
          <>
              {data.visitIntake.slice(1).map((item, index) => (
                  <p key={index}><strong>{item.title}:</strong> {item.value}</p>
              ))}
          </>
      ),
  },
  {
      id: 'patient-history-content',
      title: 'Patient History',
      color: 'red',
      content: (
          <>
              <p><strong>Last Visit Date:</strong> 01/06/2022</p>
              <p><strong>Type:</strong> In-person</p>
              <p><strong>Chief Complaint:</strong> Cough</p>
              <p><strong>Treatment:</strong> Prescribed cough syrup</p>
          </>
      ),
  },

];

  return (
    <div className={`mt-4 flex flex-col gap-3`}>
      <div>
        <h1 className="font-semibold text-xl">Chief Complaint</h1>
        <p>{data.miraOSsummary.chiefComplaint}</p>
      </div>
      <div className={`bg-purple-100 p-4 rounded-lg flex flex-col gap-2`}>
        <h1 className='text-xl font-bold'>Mira AI</h1>
        <p><strong>Diagnosis:</strong> {data.miraOSsummary.dx[0].diagnosis}</p>
        <p><strong>Probability:</strong> {data.miraOSsummary.dx[0].probability}</p>
        <p><strong>ICD10CM Code:</strong> {data.miraOSsummary.dx[0].ICD10CMCode}</p>
        <p><strong>Explanation:</strong> Symptoms are consistent with a viral upper respiratory infection...</p>
        <p><strong>Recommended Rx:</strong></p>
        <ul>
          {data.miraOSsummary.rxRecommendation.map((rx, index) => (
              <li key={index}>{rx.name} ({rx.type}): {rx.dose}; {rx.instruction}</li>
          ))}
        </ul>
        <p><strong>Reasons for Dx:</strong> {data.miraOSsummary.reasonsForDx}</p>
      </div>
      
      <div className='flex flex-col gap-1'>
        <div className="grid grid-cols-2 gap-2 md:flex">
            {collapsibleSections.map((section, index) => (
              <div key={index} className={`box border p-4 rounded-lg cursor-pointer bg-${section.color}-100`} onClick={() => toggleCollapse(section.id)}>
                <h3 className="font-semibold">{section.title}</h3>
              </div>
            ))}
        </div>

        <div className="flex gap-2 flex-col md:flex-row">
          {collapsibleSections.map((section, index) => (
            <div key={index} className={`${collapsedSections.has(section.id) ? 'flex' : 'hidden'} flex-col flex-1 gap-2 bg-${section.color}-100 p-4`}>
              {section.content}
            </div>
          ))}
        </div>
      </div>
  
      <div className='bg-purple-100 p-4 rounded-lg'>
        <h3 className="font-semibold text-xl">Treatment Plan</h3>
        <div className='flex flex-col gap-3'>
          <p><strong>Provider Name:</strong> Ozita Cooper, MD <span className="text-blue-500 cursor-pointer">(Edit)</span></p>
          <textarea className="form-control" placeholder="Type Visit Summary" value="Runny nose, sore throat, and mild fever" readOnly></textarea>
          <textarea className="form-control" placeholder="Add Treatment Plan" value="Acetaminophen: 500 mg, Diphenhydramine: 25 mg, Guaifenesin: 200-400 mg" readOnly></textarea>
          <textarea className="form-control" placeholder="Add Patient Message"value="Make sure you have plenty of rest" readOnly></textarea>
        </div>
        <div className="flex justify-end mt-4">
          <button className="py-2 px-4 bg-green-300" onClick={() => alert('Treatment Plan Finished')}>Finish</button>
        </div>
      </div>
   

    </div>
  );
};

export default ProviderView;
