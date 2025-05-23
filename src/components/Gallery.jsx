import TourCard from './TourCard'

function Gallery({ tours, loading, error, onRemove, onRefresh }) { // Display the list of tours
  if (loading) return <p className="text-center">Loading...</p> // Show loading state
  if (error) return <p className="text-center text-red-500">{error}</p> // Show error state
  if (tours.length === 0) {
    return (
      <div className="text-center">
        <p>No tours left. Refresh to reload.</p>
        <button
          onClick={onRefresh}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Refresh
        </button>
      </div>
    )
  }

  return ( // Display the tours in a grid
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tours.map(tour => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  )
}

export default Gallery
