function DestinationSelector({ tours, selected, onSelect }) {
    const destinations = ['All', ...new Set(tours.map(t => t.name))]
  
    return (
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