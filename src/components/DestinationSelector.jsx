function DestinationSelector({ tours, selected, onSelect }) { // Dropdown to select destination
    const destinations = ['All', ...new Set(tours.map(t => t.name))]
  
    return ( // Render the dropdown
      <div className="mb-6 text-center">
        <select
          value={selected}
          onChange={(e) => onSelect(e.target.value)}
          className="border rounded p-2"
        >
          {destinations.map((dest, idx) => (
            <option key={idx} value={dest}>{dest}</option>
          ))}
        </select>
      </div>
    )
  }
  
  export default DestinationSelector