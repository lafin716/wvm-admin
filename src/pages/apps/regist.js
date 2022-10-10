import { Grid } from "mdi-material-ui"
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker"
import Link from "src/@core/theme/overrides/link"
import FormLayoutsAlignment from "src/views/form-layouts/FormLayoutsAlignment"
import FormLayoutsBasic from "src/views/form-layouts/FormLayoutsBasic"
import FormLayoutsIcons from "src/views/form-layouts/FormLayoutsIcons"
import FormLayoutsSeparator from "src/views/form-layouts/FormLayoutsSeparator"

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const AppRegist = () => {
    return (
    <DatePickerWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <FormLayoutsBasic />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormLayoutsIcons />
          </Grid>
          <Grid item xs={12}>
            <FormLayoutsSeparator />
          </Grid>
          <Grid item xs={12}>
            <FormLayoutsAlignment />
          </Grid>
        </Grid>
    </DatePickerWrapper>
    )
}

export default AppRegist