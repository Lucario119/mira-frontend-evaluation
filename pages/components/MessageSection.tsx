import React from 'react';

const MessageSection: React.FC = () => {
  return (
   <div className='mt-8 bg-purple-100 p-4 rounded-lg'>
     <h3 className='text-xl font-semibold mb-2'>Messages</h3>
     <div className="flex flex-col">
      <div className="bg-green-100 p-2 rounded-lg self-start">Patient: I have been feeling unwell for the past few days.</div>
      <div className="bg-blue-100 p-2 rounded-lg mt-2 self-end">Care Navigator: Can you describe your symptoms?</div>
      <div className="bg-green-100 p-2 rounded-lg mt-2 self-start">Patient: I have a runny nose, sore throat, and mild fever.</div>
    </div>
    <div className="flex flex-col md:flex-row gap-2 mt-4">
      <input type="text" className="form-control flex-1 p-3 border-2 border-black" placeholder="Type a message..." />
      <button className="py-2 px-4 rounded-lg bg-green-300">Send Message</button>
    </div>
   </div>
  );
};

export default MessageSection;
