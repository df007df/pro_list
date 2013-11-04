var Dashboard = Dashboard || {};


Dashboard.getPros = function(bak) {
	return bak(pro_list ? pro_list : []);
};