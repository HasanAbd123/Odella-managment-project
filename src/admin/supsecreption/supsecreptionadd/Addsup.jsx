import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'
import "./addsup.scss"
import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Formsup from '../../../componentadmin/formsupsec/Formsup'

const Addsup = () => {
  return (
    <div className='addsup'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    
 <Formsup/>
    
    </div>
   
</div>
  )
}

export default  Addsup