import FuturisticAuthHome from "./components/Home/FuturisticAuthHome"
import { Button } from "./components/ui/button"
import { Calendar } from "./components/ui/calendar"

const App = () => {
  return (
    <div className="p-10 flex flex-col gap-2 justify-center items-center">
      <h1 className='text-3xl font-bold'>Welcom to Auuth App</h1>
      <FuturisticAuthHome/>
      <Calendar />
    </div>
  )
}

export default App
