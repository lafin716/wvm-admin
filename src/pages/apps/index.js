// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import TableApps from 'src/views/tables/TableApps'
import { Button, IconButton } from '@mui/material'
import { Car, Plus } from 'mdi-material-ui'

const Apps = () => {
    return (
    <Grid container spacing={6}>
        <Grid item xs={12}>
            <Grid style={{display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                <Link href='/apps/regist'>
                    <Button>신규 앱 추가</Button>
                </Link>
            </Grid>
            <Card>
            <CardHeader title='앱 목록' titleTypographyProps={{ variant: 'h6' }} />
            <TableApps />
            </Card>
        </Grid>
    </Grid>
    );
}

export default Apps