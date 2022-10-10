// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import TableApps from 'src/views/tables/TableApps'
import { IconButton } from '@mui/material'

const Apps = () => {
    return (
    <Grid container spacing={6}>
        <Grid item xs={12}>
            <Card>
            <CardHeader title='앱 목록' titleTypographyProps={{ variant: 'h6' }} >
                <IconButton />
            </CardHeader>
            <TableApps />
            </Card>
        </Grid>
    </Grid>
    );
}

export default Apps