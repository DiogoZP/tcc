import { Button, Divider, NavLink as NavGroup } from '@mantine/core';
import { FaCar, FaBuildingUser, FaUser } from 'react-icons/fa6';
import { TbLogout2, TbSteeringWheel, TbDashboard } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import classes from './navbar.module.scss';

const data = [
    {
        group: 'Cadastros',
        routes: [
            {
                link: '/admin/setores',
                label: 'Setores',
                icon: FaBuildingUser,
            },
            {
                link: '/admin/usuarios',
                label: 'Usuários',
                icon: FaUser,
            },
        ],
    },
    {
        group: 'Frota',
        routes: [
            { link: '/admin/veiculos', label: 'Veiculos', icon: FaCar },
            { link: '/admin/motoristas', label: 'Motoristas', icon: TbSteeringWheel },
        ],
    },
];

const links = data.map((item) => (
    <NavGroup
        key={item.group}
        label={item.group}
        className={classes.navGroup}
        styles={{
            children: { padding: 0 },
            label: { fontSize: '1rem', fontWeight: 500 },
        }}
    >
        {item.routes.map((route) => (
            <NavLink
                key={route.label}
                to={route.link}
                className={({ isActive }) => (isActive ? classes.activeLink : classes.link)}
            >
                <route.icon className={classes.linkIcon} />
                <span>{route.label}</span>
            </NavLink>
        ))}
    </NavGroup>
));

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <NavLink
                    to="/admin"
                    end
                    className={({ isActive }) => (isActive ? classes.activeLink : classes.link)}
                >
                    <TbDashboard className={classes.linkIcon} />
                    <span>Dashboard</span>
                </NavLink>
                <Divider my="md" />
                {links}
            </div>

            <div className={classes.footer}>
                <Button
                    className={classes.link}
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    <TbLogout2 className={classes.linkIcon} />
                    <span>Sair</span>
                </Button>
            </div>
        </nav>
    );
}
