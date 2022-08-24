import Menu from './menu'

const TopMenu = ({menu, showHome, showProf, showAcad, showPers})=> {
    return (
        <>
        {menu.map((menu) =>(
            <Menu menu={menu} showHome={showHome} showProf={showProf} showAcad={showAcad} showPers={showPers} />
        ))}
        </>
    )
}

export default TopMenu