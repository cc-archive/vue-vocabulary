import LicenseIconography from '@/elements/LicenseIconography/LicenseIconography'

export default { title: 'Elements|LicenseIconography' }

export const iconSet = () => ({
  components: { LicenseIconography },
  template: `
    <div>
        <LicenseIconography :icon-list="['']"/>
        <br/><br/>
        <LicenseIconography :icon-list="['by', 'nc', 'nd', 'sa']"/>
        <br/><br/>
        <LicenseIconography :icon-list="['nc-eu', 'nc-jp']"/>
        <br/><br/>
        <LicenseIconography :icon-list="['sampling', 'sampling-plus', 'remix', 'share']"/>
        <br/><br/>
        <LicenseIconography :icon-list="['zero', 'pd']"/>
    </div>
  `
})
