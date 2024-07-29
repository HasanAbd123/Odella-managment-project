import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'
import "./addbus.scss"
import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Formsup from '../../../componentadmin/formsupsec/Formsup'
import Formbus from '../../../componentadmin/formbus/Formbus'

const Addbus = () => {
  return (
    <div className='addbus'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    
 <Formbus/>
    
    </div>
   
</div>
  )
}

export default  Addbus