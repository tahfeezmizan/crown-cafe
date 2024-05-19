import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hook/useMenu";
import shopImg from '../../assets/shop/banner2.jpg';
import Cover from "../Menu/Cover/Cover";
import TabCard from "./TabCard/TabCard";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");
    const drinks = menu.filter(item => item.category === "drinks");

    return (
        <div>
            <Cover image={shopImg} title="OUR SHOP" description="Would you like to try a dish?" ></Cover>

            <div className="container mx-auto py-20">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="font-semibold text-xl uppercase">
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <TabCard item={salad}></TabCard>
                    </TabPanel>
                    <TabPanel>
                        <TabCard item={pizza}></TabCard>
                    </TabPanel>
                    <TabPanel>
                        <TabCard item={soups}></TabCard>
                    </TabPanel>
                    <TabPanel>
                        <TabCard item={dessert}></TabCard>
                    </TabPanel>
                    <TabPanel>
                        <TabCard item={drinks}></TabCard>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;