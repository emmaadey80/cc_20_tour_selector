import { useEffect, useState } from 'react'
import Gallery from './components/Gallery.jsx'
import DestinationSelector from './components/DestinationSelector.jsx'
import './style.css';

const API_URL = '/api/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [filteredTours, setFilteredTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedDestination, setSelectedDestination] = useState('All')

  const fetchTours = async () => {
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

  useEffect(() => {
    fetchTours()
  }, [])

  useEffect(() => {
    if (selectedDestination === 'All') {
      setFilteredTours(tours)
    } else {
      setFilteredTours(tours.filter(tour => tour.name === selectedDestination))
    }
  }, [selectedDestination, tours])

  const removeTour = (id) => {
    setFilteredTours(prev => prev.filter(tour => tour.id !== id))
  }

  const handleRefresh = () => {
    fetchTours()
    setSelectedDestination('All')
  }

  return (
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
