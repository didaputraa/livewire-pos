class PercetakanMenu extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		return(
			<div>
				<a href="javascript:" class="nav-link">
					<i class="nav-icon">
						<svg width="27px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#007BFF">
							<path d="M6 3L6 6L18 6L18 3L6 3 z M 5 8C3.35 8 2 9.35 2 11L2 17L6 17L6 21L18 21L18 17L22 17L22 11C22 9.35 20.65 8 19 8L5 8 z M 19 10C19.6 10 20 10.4 20 11C20 11.6 19.6 12 19 12C18.4 12 18 11.6 18 11C18 10.4 18.4 10 19 10 z M 8 14L16 14L16 19L8 19L8 14 z" fill="#007BFF" />
						</svg>
					</i>
					<p>Percetakan</p>
					<i class="right text-primary fas fa-angle-left mt-1"></i>
				</a>
			</div>
		);
	}
}

class SubPercetakan extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		return(
			<div id='root-subPercetakan'>
				<li class="nav-item">
					<a href="javascript:" class="nav-link">
						<i class="nav-icon">
							<svg width="16px" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="#007BFF">
								<path d="M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 22 17.511003 22 12C22 6.4889971 17.511003 2 12 2 z M 12 4C16.430123 4 20 7.5698774 20 12C20 16.430123 16.430123 20 12 20C7.5698774 20 4 16.430123 4 12C4 7.5698774 7.5698774 4 12 4 z" fill="#007BFF" />
							</svg>
						</i>
						<p>No Resi</p>
					</a>
				</li>
				<li class="nav-item">
					<a href="javascript:" class="nav-link">
						<i class="nav-icon">
							<svg width="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#007BFF">
								<path d="M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 22 17.511003 22 12C22 6.4889971 17.511003 2 12 2 z M 12 4C16.430123 4 20 7.5698774 20 12C20 16.430123 16.430123 20 12 20C7.5698774 20 4 16.430123 4 12C4 7.5698774 7.5698774 4 12 4 z" fill="#007BFF" />
							</svg>
						</i>
						<p>Nota</p>
					</a>
				</li>
			</div>
		);
	}
}

class Beranda extends React.Component
{
	constructor(){
		super();
	}
	
	componentDidMount(){
		let data1 = {
			labels: ['januari', 'februari', 'maret', 'april','mei','juni','juli','agustus','september','oktober','november','desember'],
			datasets:[
				{
					borderColor	: '#2c92ff',
					pointColor	: 'red',
					pointStrokeColor	: 'red',
					pointHighlightFill  : 'red',
					pointHighlightStroke: 'rgba(220,220,220,1)',
					data		: [38,33,45,70,22,33,20,29,53,22,18,29],
					fill		: false
				}
			]
		};

		let grafix_penjualan = $('#grafik-penjualan');

		new Chart(grafix_penjualan,{
			type:'line',
			data:data1,
			options:{
				scales:{
					xAxes:[{
						gridLines:{
							display:false
						}
					}]
				},
				legend:{
					display:false
				}
			}
		});
	}
	
	render(){
		let orderNow =(
			<svg 
				width="60px" 
				xmlns="http://www.w3.org/2000/svg" 
				viewBox="0 0 24 24" 
				fill="#007BFF"
			>
				<path d="M6 2C4.897 2 4 2.897 4 4L4 20C4 21.103 4.897 22 6 22L12.683594 22C12.387594 21.378 12.181078 20.707 12.080078 20L12.074219 20C12.026219 19.673 12 19.34 12 19C12 18.305 12.105922 17.634 12.294922 17L11.818359 17C11.244359 16.91 9.4121094 16.479469 9.4121094 13.855469L11.302734 13.855469C11.302734 15.563469 12.182406 15.492188 12.316406 15.492188C12.463406 15.492188 13.185547 15.465609 13.185547 14.349609C13.185547 12.120609 9.7265625 13.108578 9.7265625 9.7675781C9.7265625 7.4775781 11.623891 7.121125 11.962891 7.078125L11.962891 5.6503906L12.970703 5.6503906L12.970703 7.1054688C13.291703 7.1664687 15.087891 7.576125 15.087891 10.203125L13.197266 10.203125C13.197266 8.830125 12.614141 8.6152344 12.369141 8.6152344C12.235141 8.6152344 11.615234 8.6503437 11.615234 9.7773438C11.616234 11.512344 14.248188 11.242375 14.867188 13.359375C15.771187 12.696375 16.841 12.250031 18 12.082031L18 12.085938C18.034 12.080937 18.064656 12.078219 18.097656 12.074219C18.393656 12.035219 18.693 12 19 12C19.326 12 19.643031 12.029266 19.957031 12.072266L19.957031 3.7167969C19.980031 3.3877969 19.863141 3.0518594 19.619141 2.7558594C19.317141 2.3908594 18.733 2 18 2L6 2 z M 19 14C16.239 14 14 16.239 14 19C14 21.761 16.239 24 19 24C21.761 24 24 21.761 24 19C24 16.239 21.761 14 19 14 z M 18 16L20 16L20 18L22 18L22 20L20 20L20 22L18 22L18 20L16 20L16 18L18 18L18 16 z" fill="#007BFF" />
			</svg>
		);
		
		return(
			<div class="row">
				
				<div class="col-md-3">
					<div class="info-box border-primary info-box-border">
						<div class="info-box-icon">{orderNow}</div>
						<div class="info-box-content">
							<span class="info-box-text">Order hari ini</span>
							<span class="info-box-number">201</span>
						</div>
					</div>
				</div>
				<div class="col-lg-12">
					<div class="card bg-white">
						<div class="card-header">
							<h6 class="card-title">Penjualan Tahun 2020</h6>
						</div>
						<canvas id="grafik-penjualan" style={{height:'300px'}}></canvas>
						<div class="card-footer"></div>
					</div>
				</div>

			</div>
		);
	}
}
ReactDOM.render(
	<Beranda />,
	document.getElementById('AjaxcontentloaD')
);

ReactDOM.render(
	<PercetakanMenu />,
	document.getElementById('percetakan')
);

ReactDOM.render(
	<SubPercetakan />,
	document.getElementById('subPercetakan')
);