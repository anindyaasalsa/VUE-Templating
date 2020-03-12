<template>
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <a href="#" class="btn btn-success btn-md">Tambah</a>

                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0" style="height: 300px;">
                <table class="table table-head-fixed text-nowrap">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama Kantin</th>
                      <th>No.Stand</th>
                      <th>Nama Penyewa</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Kantin Murmer</td>
                      <td>Stand 8</td>
                      <td>Mr.Yoyok</td>
                      <td>
                          <a class="btn btn-info" href="#">Ubah</a>
                          <a class="btn btn-danger" href="#">Hapus</a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Kantin Kopi.ID</td>
                      <td>Stand 11</td>
                      <td>Mbak Win</td>
                      <td>
                          <a class="btn btn-info" href="#">Ubah</a>
                          <a class="btn btn-danger" href="#">Hapus</a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Burger Juos</td>
                      <td>Stand 3</td>
                      <td>Pak Mukhlis</td>
                      <td>
                          <a class="btn btn-info" href="#">Ubah</a>
                          <a class="btn btn-danger" href="#">Hapus</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
</template>