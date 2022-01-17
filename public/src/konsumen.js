function getKonsumen(baseUrl, target, type = 'full')
{
	let str 	= '';
	let element_= type == 'full'? '#AjaxcontentloaD' : '#table-data';
	
	if(type == 'full')
	{
		str = `<div class="col-lg-12">
			<div class="card">
			<div class="card-header">
				<h5 class="card-title d-inline">T </h5>&nbsp;&nbsp;&nbsp;<button class="btn btn-outline-success d-inline"><i class="fa fa-plus"></i></button>
			</div>
			<div class="card-body">
				<table class="table" id="table-data">
				<thead>
					<tr>
						<th>Nama</th>
						<th>No telp</th>
						<th>Gender</th>
						<th>Alamat</th>
						<th>Opsi</th>
					</tr>
				</thead>
				<tbody>`;
	}
	else
	{
		str = `<thead>
					<tr>
						<th>Nama</th>
						<th>No telp</th>
						<th>Gender</th>
						<th>Alamat</th>
						<th>Opsi</th>
					</tr>
				</thead>
				<tbody>`;
	}
				
		$.ajax({
			url: target
		})
		.done(e_data =>{
			
			$(element_).empty();
			
			e_data.forEach(function(row){
				str += `
					<tr>
						<td>${row.Nama}</td>
						<td>${row.NoTelp}</td>
						<td>${row.Gender}</td>
						<td>${row.Alamat}</td>
						<td>
							<button class="btn btn-sm btn-warning" onClick="showById('${row.IDKonsumen}')">
								<i class="fa fa-edit"></i>
							</button>
							<button class="btn btn-sm btn-danger" onClick="preferDel('${row.IDKonsumen}')">
								<i class="fa fa-trash-alt"></i>
							</button>
						</td>
					</tr>
				`;
			});
			
			replaceUrl(baseUrl + '/konsumen');
			
			if(type == 'full')
			{
				str+=`</tbody></table></div></div></div>`;
			}
			else
			{
				str+=`</tbody></table>`;
			}
			$(element_).append(str);
			
			Table_init();
		});
}