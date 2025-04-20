import { useEffect, useState } from 'react'
import Gallery from './components/Gallery.jsx'
import DestinationSelector from './components/DestinationSelector.jsx'
import './style.css';

const API_URL = '/api/react-tours-project' // Adjust this URL based on your server setup

function App() { // Main component
  const [tours, setTours] = useState([])
  const [filteredTours, setFilteredTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedDestination, setSelectedDestination] = useState('All')

  const fetchTours = async () => { // Fetch tours from the API
    setLoading(true)
    try {
      const res = await fetch(API_URL)
      if (!res.ok) throw new Error('Failed to fetch tours')
      const data = await res.json()
      setTours(data)
      setFilteredTours(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { // Fetch tours on component mount
    fetchTours()
  }, [])

  useEffect(() => { // Filter tours based on selected destination
    if (selectedDestination === 'All') {
      setFilteredTours(tours)
    } else {
      setFilteredTours(tours.filter(tour => tour.name === selectedDestination))
    }
  }, [selectedDestination, tours])

  const removeTour = (id) => { // Remove a tour from the list
    setFilteredTours(prev => prev.filter(tour => tour.id !== id))
  }

  const handleRefresh = () => { // Refresh the tour list
    fetchTours()
    setSelectedDestination('All')
  }

  return ( // Main render function
    <main className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">🌍 Tour Destination Selector</h1>
      <DestinationSelector
        tours={tours}
        selected={selectedDestination}
        onSelect={setSelectedDestination}
      />
      <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        onRemove={removeTour}
        onRefresh={handleRefresh}
      />
    </main>
  )
}

export default App
