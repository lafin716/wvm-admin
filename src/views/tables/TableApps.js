// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import { Android, Apple, AppleIos, Cog, CogOffOutline, CogOutline, FolderRefresh, Loading, Recycle, Refresh, RefreshAuto, TrashCan, TrashCanOutline, WebRefresh } from 'mdi-material-ui'
import styles from 'styles/animate.module.css'
import { IconButton } from '@mui/material'

const columns = [
  { id: 'name', label: '이름', minWidth: 200 },
  { id: 'platform', label: '플랫폼', minWidth: 30 },
  {
    id: 'service_state',
    label: '서비스 상태',
    minWidth: 50
  },
  {
    id: 'build_state',
    label: '빌드 상태',
    minWidth: 50
  },
  {
    id: 'deploy_state',
    label: '배포 상태',
    minWidth: 50,
  },
  {
    id: 'created_at',
    label: '생성날짜',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'buttons',
    label: '관리',
    minWidth: 70,
    align: 'center'
  }
]

function getManageButtons() {
  return (
    <div>
      <IconButton>
        <CogOutline />
      </IconButton>
      <IconButton>
        <TrashCanOutline />
      </IconButton>
    </div>
  )
}

function createData(code, name, platform, service_state, build_state, deploy_state, created_at) {
  var buttons = getManageButtons();
  return { code, name, platform, service_state, build_state, deploy_state, created_at, buttons}
}

const labelService = {
  'CREATED' : <span>생성됨</span>,
  'RUNNING' : <span style={{color: 'green'}}>운영중</span>,
  'STOP' : <span style={{color: 'red'}}>중지됨</span>,
  'EXPIRED' : <span style={{color: 'gray'}}>만료됨</span>,
  'REMOVED' : <span style={{color: 'gray'}}>삭제됨</span>,
}

const labelBuild = {
  'NOT_PREPARED' : <span>빌드되지않음</span>,
  'PREPARED' : <span>빌드준비완료</span>,
  'PENDING' : <p style={{display: 'flex'}}>빌드중<Loading className={styles.spinning}/></p>,
  'COMPLETE' : <span style={{color: 'green'}}>빌드완료</span>,
  'ERROR' : <span style={{color: 'red'}}>빌드오류</span>,
}

const labelDeploy = {
  'NOT_DEPLOYED' : <span>배포되지않음</span>,
  'DEPLOYED' : <span style={{color: 'green'}}>배포됨</span>,
  'PENDING' : <p style={{display: 'flex'}}>배포중<Loading className={styles.spinning}/></p>,
  'ERROR' : <span style={{color: 'red'}}>배포오류</span>,
}

const platformIcons = {
  'ANDROID': <Android style={{color: '#3DDB84'}}/>,
  'IOS': <Apple style={{color: '#000000'}}/>
}

const rows = [
  createData(1, '우기몰', platformIcons['ANDROID'], labelService['RUNNING'], labelBuild['COMPLETE'], labelDeploy['PENDING'], '2022-11-11 12:00:00'),
  createData(2, '윅몰2', platformIcons['IOS'], labelService['STOP'], labelBuild['PENDING'], labelDeploy['NOT_DEPLOYED'], '2022-11-11 12:00:00')
]

const TableApps = () => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableApps
