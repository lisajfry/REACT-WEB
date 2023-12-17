import React from 'react';
import './FormReservasi.css';

class FormReservasi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      tanggal: '',
      layanan: '',
      metodePembayaran: '',
      isSubmitted: false
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    this.setState({ isSubmitted: true });
    alert('Reservasi berhasil disimpan');
  }

  render() {
    return (
      <form className="form-reservasi" onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={this.handleChange} />
        </label>
        <label>
          Tanggal:
          <input type="date" name="tanggal" onChange={this.handleChange} />
        </label>
        <label>
          Layanan:
          <select name="layanan" onChange={this.handleChange}>
            <option value="">--Pilih Layanan--</option>
            <option value="refleksiologi">Refleksiologi</option>
            <option value="hydrotherapy">Hydrotherapy</option>
            <option value="babyMassage">Baby Massage</option>
            <option value="babyYoga">Baby Yoga</option>
            <option value="musicTherapy">Music Therapy</option>
            <option value="sensoryPlay">Sensory Play</option>
          </select>
        </label>
        <label>
          Metode Pembayaran:
          <select name="metodePembayaran" onChange={this.handleChange}>
            <option value="">--Pilih Metode Pembayaran--</option>
            <option value="kartuKredit">Kartu Kredit</option>
            <option value="transferBank">Transfer Bank</option>
            <option value="cash">Cash</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        {this.state.isSubmitted && <p>Reservasi berhasil disimpan</p>}
      </form>
    );
  }
}

export default FormReservasi;
