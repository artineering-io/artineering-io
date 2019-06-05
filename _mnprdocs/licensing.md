---
layout: documentation
title: Licensing
type: Docs
excerpt: Documentation on activating MNPRX Licenses
tags: [Docs, MNPRX]
comments: true
schema:
---

## MNPRX licensing basics

Purchasing MNPRX grants you a license that allows you to use the full functionality of MNPRX. This license takes the form of an activation code that is sent to you (typically by email) alongside your copy of MNPRX.
If you did not receive an activation code, please contact us at TODO. 

A single MNPRX license can be active on only one machine at a time. 
**An internet connection is required for running the licensed version of MNPRX**. Running the non-commercial version does not require any internet connection. 



## Activating a license on a machine.
In order to use the full version of MNPRX on a machine, you need to activate your license on this machine.
The first time MNPRX is run, you will be prompted with the following dialog:

<figure class="align-center">
	<img src="/images/MNPRX/licensing/first-time.png" alt="First-time activation dialog" style="max-width: 500px">
	<figcaption>First-time activation dialog.</figcaption>
</figure>

Choose **Activate with key** to activate a purchased license for this machine and have access to the full functionality of MNPRX. 
If you did not purchase MNPRX, **Activate non-commercial** will activate the non-commercial version of MNPRX on this machine, with limited functionality. 
If you don't want to activate your license now, click **Cancel** to run MNPRX as non-commercial this time only. You will be prompted again the next time Maya starts.

After clicking **Activate with key**, enter the activation code that you received when purchasing MNPRX:

<figure class="align-center">
	<img src="/images/MNPRX/licensing/activation-code-prompt.png" alt="Enter activation code." style="max-width: 500px">
	<figcaption>Enter your activation code in the text box and click OK.</figcaption>
</figure>

After MNPRX checks that the key is valid, and if the license has not yet been activated, you will be prompted for confirmation. Click **Activate** to confirm and activate this machine, or **Cancel** to abort activation and run as non-commercial for this run of Maya:

<figure class="align-center">
	<img src="/images/MNPRX/licensing/activation-confirmation.png" alt="Confirm activation" style="max-width: 500px">
	<figcaption>Confirm activation by clicking Activate.</figcaption>
</figure>

## License migration
When activating a license on a machine, if the license has already been activated on another machine outside of the last 24 hours, the license will automatically migrate to the new machine,
and the old machine will be deactivated. 
**Note that you must wait at least 24 hours after the last activation to migrate the license on another machine.** Until then, activation will fail.

After inputting the activation code, you will be prompted to confirm the migration of the license to this machine. Click **Activate** to confirm, or **Cancel** to abort activation and run as non-commercial for this run of Maya. Note that the other machine will be deactivated.


## Activation or license verification failure
In case the activation code is not valid, or the existing license is no longer valid, an error message will appear. 
**Retry** will prompt you to enter a valid activation code, and **Cancel** will run MNPRX as non-commercial this time only.

## Troubleshooting
If activation fails (after inputting the validation code), check the inputted activation code. If the issue persists, contact us at TODO.
If validation fails, check that your license or subscription has not expired.
Deleting the license file at $MAYA_APP_DIR/MNPRX.lic will reset the license: MNPRX will prompt you for an activation code on the next run.

{% include toc-side %}
