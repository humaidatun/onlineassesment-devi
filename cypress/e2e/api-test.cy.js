describe('API Testing - POST Pendaftaran', () => {
  const apiUrl = 'https://api.infokes.id/v1/postPendaftaran';
  const headers = {
    'x-username': 'xxxxxxxxxx',
    'x-token': 'xxxxxxxxxxxxxx',
    'Content-Type': 'application/json',
  };
  it('User berhasil post pendaftaran dengan mengisi seluruh data', () => {
    cy.request({
      method: 'POST',
      url: apiUrl,
      headers: headers,
      body: {
        nama: 'APRIS-SUNDIANA',
        nik: '3211111111111111',
        asuransi: '0000',
        no_asuransi: '',
        kode_poli: 'UMUM',
        tanggalperiksa: '2022-07-12'
      },
    }).then((Response) => {
      expect(Response.status).to.eq(200);
      expect(Response.body).to.have.property('status','success');
      expect(Response.body).to.have.property('message','Pendaftaran berhasil');
    });
  });
  it('Tidak berhasil post pendaftaran dengan tidak mengisi nama', () => {
    cy.request({
      method: 'POST',
      url: apiUrl,
      headers: headers,
      body: {
        nama: '',
        nik: '3211111111111111',
        asuransi: '0000',
        no_asuransi: '',
        kode_poli: 'UMUM',
        tanggalperiksa: '2022-07-12'
      }
    }
  })
  it('Tidak berhasil post pendaftaran dengan tidak mengisi nik' () => {
    cy.request({
      method: 'POST',
      url: apiUrl,
      headers: headers,
      body: {
        nama: 'APRIS-SUNDIANA',
        nik: '',
        asuransi: '0000',
        no_asuransi: '',
        kode_poli: 'UMUM',
        tanggalperiksa: '2022-07-12',
      }
    })
  })
  it('Tidak berhasil post pendaftaran dengan tidak mengisi asuransi' () => {
    cy.request({
      method: 'POST',
      url: apiUrl,
      headers: headers,
      body: {
        nama: 'APRIS-SUNDIANA',
        nik: '3211111111111111',
        asuransi: '',
        no_asuransi: '',
        kode_poli: 'UMUM',
        tanggalperiksa: '2022-07-12',
      }
    })
  })
  it('Tidak berhasil post pendaftaran dengan tidak mengisi kode poli' () => {
    cy.request({
      method: 'POST',
      url: apiUrl,
      headers: headers,
      body: {
        nama: 'APRIS-SUNDIANA',
        nik: '3211111111111111',
        asuransi: '0000',
        no_asuransi: '',
        kode_poli: '',
        tanggalperiksa: '2022-07-12',
      }
    })
  })
  it('Tidak berhasil post pendaftaran dengan tidak mengisi tanggalperiksa' () => {
    cy.request({
      method: 'POST',
      url: apiUrl,
      headers: headers,
      body: {
        nama: 'APRIS-SUNDIANA',
        nik: '3211111111111111',
        asuransi: '0000',
        no_asuransi: '',
        kode_poli: 'UMUM',
        tanggalperiksa: '2022-07-12',
      }
    })
  })
  it('Tidak berhasil post pendaftaran dengan tidak mengisi seluruh data' () => {
    cy.request({
      method: 'POST',
      url: apiUrl,
      headers: headers,
      body: {
        nama: '',
        nik: '',
        asuransi: '',
        no_asuransi: '',
        kode_poli: '',
        tanggalperiksa: '',
      }
    })
  })
})