import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const BASE_URL = 'http://127.0.0.1:5000';

function Upload() {
  const [term, setTerm] = React.useState('');

  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/upload`)
      .then((response) => {
        setTerm(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <h1>{term}</h1>
    </div>
  );
}

function Populate() {
  const [post, setPost] = React.useState('');

  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/populate`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div>
      <h1>{post}</h1>
    </div>
  );
}

function Install() {
  const [term, setTerm] = React.useState('');

  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/install`)
      .then((response) => {
        setTerm(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <h1>{term}</h1>
    </div>
  );
}

function Start() {
  const [term, setTerm] = React.useState('');

  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/start`)
      .then((response) => {
        setTerm(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <h1>{term}</h1>
    </div>
  );
}

function Stop() {
  const [term, setTerm] = React.useState('');

  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/stop`)
      .then((response) => {
        setTerm(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <h1>{term}</h1>
    </div>
  );
}

function Uninstall() {
  const [term, setTerm] = React.useState('');

  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/uninstall`)
      .then((response) => {
        setTerm(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <h1>{term}</h1>
    </div>
  );
}

function Updateconfig() {
  const [term, setTerm] = React.useState('');

  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/update_config`)
      .then((response) => {
        setTerm(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <h1>{term}</h1>
    </div>
  );
}

function Updatepem() {
  const [term, setTerm] = React.useState('');

  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/update_pem`)
      .then((response) => {
        setTerm(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <h1>{term}</h1>
    </div>
  );
}

function Status() {
  const [term, setTerm] = React.useState('');

  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/status`)
      .then((response) => {
        setTerm(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <h1>{term}</h1>
    </div>
  );
}

function Service() {
  return (
    <div>
      <Install />
      <Populate />
      <Upload />
      <Start />
      <Stop />
      <Uninstall />
      <Updateconfig />
      <Updatepem />
      <Status />
    </div>
  );
}
export default Service;
