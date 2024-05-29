import React from "react";

interface ViewToggleProps {
    view: string;
    toggleView: any
}

const ViewToggle: React.FC<ViewToggleProps> = ({ view, toggleView }) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-indigo-600" id="toggle-view" onClick={toggleView}>
        {view === 'careNavigator' ? 'Care Navigator View' : 'Provider View'}
      </h2>
      <button className="rounded-lg px-4 py-2 bg-indigo-400 text-white" onClick={toggleView}>
        Switch to {view === 'careNavigator' ? 'Provider View' : 'Care Navigator View'}
      </button>
    </div>
  );
};

export default ViewToggle;