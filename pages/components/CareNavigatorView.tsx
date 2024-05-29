import React from 'react';

interface CareNavigatorViewProps {
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

const CareNavigatorView: React.FC<CareNavigatorViewProps> = ({ data, collapsedSections, toggleCollapse }) => {
 
   const collapsibleSections: CollapsibleSection[] = [
        {
            id: 'diagnostic-content',
            title: 'Diagnostic',
            color: 'blue',
            content: (
                <>
                    {data.diagnostic.length > 0 ? data.diagnostic.map((diag, index) => (
                        <p key={index}>{diag.name} (Code: {diag.code})</p>
                    )) : 'No diagnostic information available.'}
                 </>
            ),
        },
        {
            id: 'self-care-tips-content',
            title: 'Self-Care Tips',
            color: 'green',
            content: (
                <>
                    <p>{data.selfCareTips}</p>
                    <div>
                      <h3 className='font-semibold text-lg'>OTC Medications:</h3>
                      <ul className='flex flex-col gap-2'>
                        {data.OTC.map((med, index) => (
                          <li key={index}>
                            <strong>Name:</strong> {med.name} <br />
                            <strong>Type:</strong> {med.type} <br />
                            <strong>Dose:</strong> {med.dose} <br />
                            <strong>Frequency:</strong> {med.frequency}
                          </li>
                        ))}
                      </ul>
                    </div>
                </>
            ),
        },
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
        <h3 className="font-semibold text-xl">Chief Complaint</h3>
        <p>{data.miraOSsummary.chiefComplaint}</p>
      </div>
      <div className='bg-purple-100 p-4 rounded-lg flex flex-col gap-2'>
        <span>
          <h3 className="font-semibold">Condition Category</h3>
          <p>{data.miraOSsummary.conditionCategory}</p>
        </span>
        <span>
          <h3 className="font-semibold">Triage Level</h3>
          <p>{data.miraOSsummary.triageLevel.join(', ')}</p>
        </span>
        <span>
          <h3 className="font-semibold">Mira Care Options</h3>
          <p>Virtual Primary Care: A virtual consultation can help confirm the diagnosis and provide additional care instructions.</p>
        </span>
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
            <div key={index} className={`${collapsedSections.has(section.id) ? 'flex' : 'hidden'} flex-col flex-1 gap-2 bg-${section.color}-100 p-4`} data-testid={section.id}>
              {section.content}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <button className="py-2 px-4 bg-green-300" onClick={() => alert('Care options sent')}>Send Care Options</button>
        <button className="py-2 px-4 bg-red-300">Cancel Order</button>
      </div>
    </div>
  );
};

export default CareNavigatorView;
