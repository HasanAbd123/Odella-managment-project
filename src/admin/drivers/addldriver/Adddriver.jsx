import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'
import "./adddriver.scss"
import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'

import Formdriver from '../../../componentadmin/formdriver/Formdriver'

const Adddriver = () => {
  return (
    <div className='adddriver'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    
<Formdriver/>
    
    </div>
   
</div>
  )
}

export default  Adddriver