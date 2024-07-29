import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'
import "./singlesup.scss"
import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Formsup from '../../../componentadmin/formsupsec/Formsup'
import Singlesup from '../../../componentadmin/singlesupcecrep/Singlesup'

const Singlesupsec = () => {
  return (
    <div className='singlsup'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    
<Singlesup/>
    
    </div>
   
</div>
  )
}

export default  Singlesupsec