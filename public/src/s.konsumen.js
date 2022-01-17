
	let xtoken = $('csrf_vals').val();
	
	function preferDel(id){
		$.ajax({
			url:baseUrl+'/konsumen/ajax_showById/'+id
		}).done(e=>{
			$('#d_id').val(e.IDKonsumen);
			$('#m-del').modal('show');
		});
	}
	
	function sendDel(){
		$.ajax({
			url:"{{ route('k.delete') }}",
			method:'DELETE',
			data:{
				id: $('#d_id').val(),
			},
			headers:{
				'X-CSRF-TOKEN': xtoken
			}
		}).done(e=>{
			getKonsumen(baseUrl,baseUrl+'/ajax_konsumen');
			
			$('#m-del').modal('hide');
			$('#m_id').removeAttr('value');
		});
	}
	
	function showById(id=''){
		$.ajax({
			url:baseUrl+'/konsumen/ajax_showById/'+id
		}).done(e=>{
			let jk = e.Gender == 'L' ? '#e_jk1' : '#e_jk2';
			
			$('#e_id').val(e.IDKonsumen);
			$('#e_nm').val(e.Nama);
			$(jk).attr('checked','on');
			$('#e_email').val(e.Email);
			$('#e_telp').val(e.NoTelp);
			$('#e_almt').val(e.Alamat);
			
			$('#m-edit').modal('show');
		});
	}
	
	function sendStore(){
		$.ajax({
			url:"{{ route('k.simpan') }}",
			method:'POST',
			data:{
				nm		: $('#a_nm').val(),
				almt	: $('#a_almt').val(),
				jk		: document.frma.ajk.value,
				telp	: $('#a_telp').val(),
				email	: $('#a_email').val()
			},
			headers:{
				'X-CSRF-TOKEN': xtoken
			}
		}).done(e=>{
			getKonsumen(baseUrl,baseUrl+'/ajax_konsumen',0);
			
			$('#m-add').modal('hide');
		});
	}
	
	function sendUpdate(){
		$.ajax({
			url:baseUrl+'/konsumen/sendUpdate',
			method:'PUT',
			data:{
				id		: $('#e_id').val(),
				nm		: $('#e_nm').val(),
				almt	: $('#e_almt').val(),
				jk		: document.frme.ejk.value,
				telp	: $('#e_telp').val(),
				email	: $('#e_email').val()
			},
			headers:{
				'X-CSRF-TOKEN': xtoken
			}
		}).done(e=>{
			
			getKonsumen(baseUrl,baseUrl+'/ajax_konsumen',0);
			
			$('#m-edit').modal('hide');
			
		}).fail(e=>{
			console.log(e);
		});
	}