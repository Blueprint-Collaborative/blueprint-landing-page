function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({
        status: 'error',
        message: 'Missing request body'
      });
    }

    const data = JSON.parse(e.postData.contents);

    const to = 'info@blueprintcollaborative.org';
    const subject = 'New Blueprint Access Request — ' + (data.name || 'Unknown');

    const body = [
      'New access request submitted via ' + (data.source || 'Unknown source'),
      '',
      'Name:         ' + (data.name || '(missing)'),
      'Email:        ' + (data.email || '(missing)'),
      'Organization: ' + (data.organization || '—'),
      'Role:         ' + (data.role || '(missing)'),
      '',
      'Notes:',
      data.notes || '(none)'
    ].join('\n');

    MailApp.sendEmail({ to: to, subject: subject, body: body });

    return jsonResponse({
      status: 'ok'
    });
  } catch (error) {
    console.error('doPost error: ' + (error && error.stack ? error.stack : error));
    return jsonResponse({
      status: 'error',
      message: String(error)
    });
  }
}

function doGet() {
  return jsonResponse({
    status: 'ok',
    message: 'Web app is deployed'
  });
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
