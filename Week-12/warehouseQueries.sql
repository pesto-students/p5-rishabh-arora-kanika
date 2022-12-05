SELECT MIN(weight) as MinWt,itemno  FROM Items group by itemno;

select wname from warehouses where location='Pune';


/*select ONO,CNAME from Orders,customer,itemsOrders oc
LEFT OUTER JOIN (select  ono ,itemno from itemsOrders ) im on im.ono = oc.ono
 where  customer.cno=Orders.cno
AND CUSTOMER.cname= 'CN1'; */

/*SELECT MAX(mycount) 
FROM (SELECT wid,COUNT(wid) as mycount 
FROM stores 
GROUP BY wid); */

select orders.ONO,customer.CNAME from Orders,customer
where  customer.cno=Orders.cno;





