import { Divider, NavLink as NavGroup } from '@mantine/core';
import { FaCar } from 'react-icons/fa6';
import { TbLogout2, TbSteeringWheel, TbDashboard } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import classes from './navbar.module.scss';

const data = [
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
                <Divider my="md"/>
                {links}
            </div>

            <div className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <TbLogout2 className={classes.linkIcon} />
                    <span>Sair</span>
                </a>
            </div>
        </nav>
    );
}
