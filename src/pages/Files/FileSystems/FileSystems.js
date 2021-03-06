import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AddSftpFileSystemForm from '../../../components/AddSftpFileSystemForm/AddSftpFileSystemForm';
import DefaultLayout from '../../../physical_layout/DefaultLayout/DefaultLayout';
import FileSystemList from '../../../components/FileSystemList/FileSystemList';
import LinkBeocatButton from '../../../components/LinkBeocatButton/LinkBeocatButton';
import LinkDropboxButton from '../../../components/LinkDropboxButton/LinkDropboxButton';
import Card from '../../../physical_layout/Card';

const FileSystems = () => (
  <DefaultLayout>
    <div className="content">
      <div className="container-fluid">

        <h4 className="title">
              File Systems
          <small />
        </h4>

        <FileSystemList />

        <hr />

        <h4 className="title">Add File Systems</h4>

        <Row>
          <Col md={6}>
            <Card header={(<h4 className="card-title">Shortcuts</h4>)} hr>
              <LinkDropboxButton />
              <LinkBeocatButton />
            </Card>
          </Col>
        </Row>


        <Row>
          <Col md={7}>
            <Card header={(<h4>Add an SFTP File System</h4>)} hr>
              <AddSftpFileSystemForm />
            </Card>
          </Col>

          <Col md={5}>
            <Card header={(<h4>System Adding Instructions</h4>)} hr>
              <h6>Overview</h6>
              <p>
                      There are two types of file systems which you can add to your
                      Synapse account:  Agave-supported file systems and external file
                      systems.
              </p>
              <p>
                      Currently, Dropbox is the only external file system, but Google Drive,
                      Globus, and Box maybe be added on request.
              </p>
              <hr />
              <h6>Dropbox</h6>
              <p>
                      To add a Dropbox account, click the button above.  When prompted, enter your
                      Dropbox credentials and grant Synapse permission to access your Dropbox.
                      You may need to refresh to see the new system listed.
              </p>
              <hr />
              <h6>Agave Systems (via SFTP)</h6>
              <p>
                      Fill out the &quo;Add an SFTP File System&quo; form.  You will need to
                      generate an SSH key pair using ssh-keygen.  Add the public key to your
                      ~/.ssh/authorized_keys file on the target file system.  Copy and paste each
                      key, public AND private, into the form.  The system ID must be unique across
                      all users, so it may help to suffix it with your username.
              </p>
            </Card>
          </Col>
        </Row>

      </div>
    </div>
  </DefaultLayout>
);

export default FileSystems;
